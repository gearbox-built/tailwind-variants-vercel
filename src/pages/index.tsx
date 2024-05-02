import { tv } from "tailwind-variants";

const test = tv({
  base: 'flex gap-5',
  variants: {
    layout: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    }
  }
}, {
  responsiveVariants: true
})

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className={test({ layout: {initial: 'vertical', xs: 'horizontal'}})}>
        <div>Hello world!</div>
        <div>Hello world!</div>
        <div>Hello world!</div>
      </div>
    </main>
  );
}
