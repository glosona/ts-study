import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

type Metric = {
  name: string;
  value: number;
  delta: number;
  id: string;
  entries: PerformanceEntry[];
};

type ReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
