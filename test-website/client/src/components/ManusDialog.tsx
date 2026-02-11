import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

interface ManusDialogProps {
  title?: string;
  logo?: string;
  open?: boolean;
  onLogin: () => void;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
}

export function ManusDialog({
  title,
  logo,
  open = false,
  onLogin,
  onOpenChange,
  onClose,
}: ManusDialogProps) {
  const [internalOpen, setInternalOpen] = useState(open);
  const { theme } = useTheme();
  const loginButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!onOpenChange) {
      setInternalOpen(open);
    }
  }, [open, onOpenChange]);

  useEffect(() => {
    if ((onOpenChange ? open : internalOpen) && loginButtonRef.current) {
      loginButtonRef.current.focus();
    }
  }, [open, internalOpen]);

  const handleOpenChange = (nextOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(nextOpen);
    } else {
      setInternalOpen(nextOpen);
    }

    if (!nextOpen) {
      onClose?.();
    }
  };

  const dialogStyles = {
    light: "bg-[#f8f8f7] text-[#34322d] border-[rgba(0,0,0,0.08)]",
    dark: "bg-[#1a1a19] text-[#f8f8f7] border-[rgba(255,255,255,0.08)]",
  };

  return (
    <Dialog
      open={onOpenChange ? open : internalOpen}
      onOpenChange={handleOpenChange}
    >
      <DialogContent
        className={`py-5 rounded-[20px] w-[400px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.08)] backdrop-blur-2xl p-0 gap-0 text-center transition-colors duration-300 ${dialogStyles[theme]}`}
        onPointerDownOutside={(e) => e.preventDefault()}
        aria-labelledby={title ? "manus-dialog-title" : undefined}
        aria-describedby="manus-dialog-description"
      >
        <div className="flex flex-col items-center gap-2 p-5 pt-12">
          {logo ? (
            <div className="w-16 h-16 bg-white rounded-xl border border-[rgba(0,0,0,0.08)] flex items-center justify-center">
              <img 
                src={logo} 
                alt="Dialog graphic" 
                className="w-10 h-10 rounded-md"
                role="img"
                aria-hidden={!logo}
              />
            </div>
          ) : null}

          {title && (
            <DialogTitle 
              id="manus-dialog-title"
              className="text-xl font-semibold leading-[26px] tracking-[-0.44px]"
            >
              {title}
            </DialogTitle>
          )}
          <DialogDescription
            id="manus-dialog-description"
            className="text-sm leading-5 tracking-[-0.154px]"
          >
            Please login with Manus to continue
          </DialogDescription>
        </div>

        <DialogFooter className="px-5 py-5">
          <Button
            ref={loginButtonRef}
            onClick={onLogin}
            className="w-full h-10 rounded-[10px] text-sm font-medium leading-5 tracking-[-0.154px] transition-colors"
            aria-label="Login with Manus account"
            role="button"
          >
            Login with Manus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
