import { skills } from './skills'

const Skill = () => {
  const all = skills.map(item => {
    return (
      <div key={item.id} className='flex items-center justify-start bg-primary-200 py-4 px-2 rounded-lg'>
        <img src={item.icon} alt={item.name}  className='w-[60px]'/>
        <p className='pl-4 text-[1.5rem] text-slate-300 font-thin'>{item.name}</p>
      </div>
    )
  })
  return (
    <div className="flex flex-col gap-4 px-8 mt-8">
      {all}
    </div>
  )
}

export default Skill