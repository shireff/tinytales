import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, containerClassName, ...props }, ref) => {
        return (
            <div className={cn("flex flex-col gap-1.5 w-full", containerClassName)}>
                {label && (
                    <label className="text-sm font-semibold text-slate-700 ml-1">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        "flex h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm ring-offset-white transition-all placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#BE968E]/20 focus:border-[#BE968E] disabled:cursor-not-allowed disabled:opacity-50",
                        error && "border-red-500 focus:ring-red-500/20 focus:border-red-500",
                        className
                    )}
                    {...props}
                />
                {error && (
                    <span className="text-xs font-medium text-red-500 ml-1 mt-0.5">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };
