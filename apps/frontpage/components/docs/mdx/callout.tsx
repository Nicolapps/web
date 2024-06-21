import { cn } from '@repo/utils';
import snarkdown from 'snarkdown';

type Variant = 'neutral' | 'positive' | 'info' | 'warning';

const VARIANT_DEFAULT_ICON: Partial<Record<Variant, string>> = {
  info: 'ℹ️',
  warning: '⚠️',
};

interface CalloutProps {
  title?: string;
  icon?: string;
  variant?: Variant;
  children: string;
}

export function Callout({
  title,
  icon,
  children,
  variant = 'neutral',
  ...props
}: CalloutProps) {
  const appliedIcon = icon ?? VARIANT_DEFAULT_ICON[variant];

  return (
    <div
      className={cn(
        'mb-6 flex gap-4 rounded p-6',
        variant === 'neutral' &&
          'border border-blue-200 bg-blue-100 dark:border-slate-700 dark:bg-slate-900',
        variant === 'positive' &&
          'border border-blue-200 bg-blue-100 dark:border-slate-700 dark:bg-slate-900',
        variant === 'info' &&
          'border border-blue-200 bg-blue-100 dark:border-slate-700 dark:bg-slate-900',
        variant === 'warning' &&
          'border border-orange-200 bg-orange-100 dark:border-orange-800 dark:bg-orange-950',
      )}
      {...props}
    >
      {appliedIcon ? (
        <span aria-hidden className="hidden text-2xl md:flex">
          {appliedIcon}
        </span>
      ) : null}
      <div>
        {title ? (
          <div dangerouslySetInnerHTML={{ __html: snarkdown(title) }} />
        ) : null}
        <div className="mb-0 [&>p]:mb-0">{children}</div>
      </div>
    </div>
  );
}
