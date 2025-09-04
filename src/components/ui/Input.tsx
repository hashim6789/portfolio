import { useState, type InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  label: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  required = false,
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div className="relative mb-6">
      <input
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-4 py-3 bg-white/5 border-2 rounded-lg transition-all duration-300 text-white placeholder-transparent peer focus:outline-none ${
          focused || value ? "border-indigo-400" : "border-indigo-800/50"
        } hover:border-indigo-600`}
        placeholder={label}
        required={required}
        {...props}
      />
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          focused || value
            ? "-top-2 text-sm text-indigo-400 bg-slate-900 px-2"
            : "top-3 text-gray-400"
        }`}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
    </div>
  );
};
