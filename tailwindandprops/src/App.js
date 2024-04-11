import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline text-black rounded-xl p-4 m-6 bg-green-400">
      Hello world!
    </h1>
    {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://s.yimg.com/fz/api/res/1.2/9DUAEd.1ht7hyUNaL_vjRA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEzMDtxPTgwO3c9MTU4/https://s.yimg.com/zb/imgv1/8d1cb038-25bd-3f19-a896-4f06cbfb1310/t_500x300" alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div cla>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
  <div className='flex'>
  <Card  name="Jordan"/>
  <Card  name="Henry"/>
  </div>
 

    </>
  );
}

export default App;
