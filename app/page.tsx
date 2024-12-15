import { Alumni_Sans_Pinstripe, Noto_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Control } from '@/components/shared/Control';
import { TodoList } from '@/components/shared/TodoList';
import { InputGroup } from '@/components/shared/InputGroup';

const alumni = Alumni_Sans_Pinstripe({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <main className={cn('grid place-content-center')}>
      <div className="bg-zinc-100 w-[50vw] min-w-[600px] py-4 px-6 my-10">
        <h1 className={cn('text-8xl text-center', alumni.className)}>todos</h1>
        <InputGroup />
        <TodoList className={notoSans.className} />
        <Control />
      </div>
    </main>
  );
}
