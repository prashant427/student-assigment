"use client";

import * as React from "react";

import { Progress } from "./ui/progress";

type ProgressDemoProps = {
  value: number;
};


export default function ProgressDemo({ value }: ProgressDemoProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return <Progress value={progress} className="w-[60%]" />;
}