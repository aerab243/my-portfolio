import * as React from "react";

export const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}>
      {children}
    </button>
  );
};
