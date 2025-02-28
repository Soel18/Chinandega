import Turismo from '@/components/Turismo';
import Historia from '../components/Historia';
 
export * from "./Inicio";
export * from "./layout";

const navItems = [ 
    { id : 1 , Inicio : 'Inicio' }, 
    { id : 2 , Historia : 'Historia' }, 
 
  ]; 

<div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
     <a className="flex title-font font-medium items-center text-gray-900 mb-4">
     </a>
     <div className="flex flex-wrap items-center text-base justify-center">
       <a className="Historia">Historia</a>
       
     </div>
     <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4">Click Me</button>
</div>