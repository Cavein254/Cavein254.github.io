import { skills } from './skills'

const Skill = () => {
  const all = skills.map(item => {
    return (
      <div key={item.id} className='flex items-center justify-start bg-primary-200 py-4 px-2 rounded-lg pl-4 sm:flex-col sm:justify-center'>
        <img src={item.icon} alt={item.name}  className='w-[40px] sm:w-[100px]'/>
        <p className='pl-4 text-[1.5rem] text-slate-300 font-thin'>{item.name}</p>
      </div>
    )
  })
  return (
    <>
       <h4 className="text-secondary-200 text-[2rem] font-bold text-center">My Skills</h4>
      <div id="skills" className="flex flex-col gap-4 px-8 mt-8 sm:grid-cols-3 sm:grid md:grid-cols-8 md:gap-2">
        {all}
      </div>
    </>
  )
}

export default Skill