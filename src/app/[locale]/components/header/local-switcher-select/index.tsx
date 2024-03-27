'use client';

import {ChangeEvent, ReactNode, useTransition} from 'react';
// import {useRouter, usePathname} from '@/navigation';
import { useRouter } from 'next/navigation'
import styles from '@/app/[locale]/components/header/styles.module.css'

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};
export default function LocaleSwitcherSelect({
  children,
  defaultValue,
}: Props) {
  const router = useRouter();
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.push(`/${nextLocale}`)
  }
  return (
<select className={`form-select ${styles.languages_Select}`}  onChange={onSelectChange}  defaultValue={defaultValue}>
{children}
</select>
  );
}