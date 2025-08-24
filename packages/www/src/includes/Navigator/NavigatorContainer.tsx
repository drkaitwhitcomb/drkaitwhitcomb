import { forwardRef } from "react";
const baseStyles = "fixed z-50 right-6 select-none touch-none opacity-70 hover:opacity-100 transition-opacity duration-200";

export const NavigatorContainer = forwardRef<HTMLDivElement, any>(
  ({ children, style, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`${baseStyles} ${className ?? ""}`}
        style={style}
        {...rest}
      >
        {children}
      </div>
    );
  }
);