import { ReactNode, useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { HiMiniXMark } from 'react-icons/hi2';

interface BottomSheetProps {
  isOpen: boolean;
  disableCloseOnBackDropClick?: boolean;
  closeEvent: () => void;
  title?: string;
  subtitle?: string;
  maxHeight?: string;
  maxWidth?: string;
  children: ReactNode;
}

type SheetState = 'closed' | 'closing' | 'opening' | 'open';

const BottomSheet = ({
  isOpen,
  disableCloseOnBackDropClick = false,
  closeEvent,
  title = '',
  subtitle = '',
  maxHeight = '80dvh',
  maxWidth = '500px',
  children,
}: BottomSheetProps) => {
  const [mounted, setMounted] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<SheetState>('closed');

  const backDropClicked = () => {
    if (disableCloseOnBackDropClick) return;
    closeClicked();
  };

  const closeClicked = () => {
    if (!sheetRef.current) return;
    setState('closing');
  };

  const onTransitionEnd = useCallback(() => {
    if (state === 'closing') {
      setState('closed');
      closeEvent();
    } else {
      setState('open');
    }
  }, [state, closeEvent]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = sheetRef.current;
    if (!el) return;
    el.addEventListener('transitionend', onTransitionEnd);
    return () => el.removeEventListener('transitionend', onTransitionEnd);
  }, [onTransitionEnd]);

  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      setState('opening');
    }
  }, [isOpen, mounted]);

  if (!mounted) return null;

  return isOpen || state !== 'closed'
    ? createPortal(
        <>
          <div
            className={`fixed inset-0 z-10 bg-black/20 backdrop-blur-sm transition-all duration-100 ease-out ${['open', 'opening'].includes(state) ? 'opacity-100' : 'opacity-0'}`}
            onClick={backDropClicked}
          ></div>
          <div
            className={`fixed bottom-0 left-1/2 z-50 min-h-[200px] w-[min(${maxWidth},100%)] max-h-[${maxHeight}] -translate-x-1/2 rounded-t-2xl bg-white transition-all duration-150 ease-out dark:bg-gray-700 ${['open', 'opening'].includes(state) ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            ref={sheetRef}
          >
            <div
              className={`relative p-2 text-center ${title || subtitle ? 'border-b-1 border-black/10' : ''}`}
            >
              {title && <h1 className="text-xl text-black dark:text-white">{title}</h1>}
              {subtitle && <p className="text-sm text-black/70 dark:text-white/70">{subtitle}</p>}
              <HiMiniXMark
                type="button"
                className="absolute top-4 right-4 size-8 text-black dark:text-white"
                onClick={closeClicked}
                aria-label="Close"
              />
            </div>
            <div className="p-4">{children}</div>
          </div>
        </>,
        document.body,
      )
    : null;
};

export default BottomSheet;
