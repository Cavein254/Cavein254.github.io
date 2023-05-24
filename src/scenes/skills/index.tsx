import { skills } from './skills'

const Skill = () => {
  const all = skills.map(item => {
    return (
      <div key={item.id}>
        <img src={item.icon} alt='docker w-[100px]' />
        <p className='text-[2rem] text-slate-300 font-thin'>{item.name}</p>
      </div>
    )
  })
  return (
    <div className="bg-primary-200 py-4 px-2 rounded-md flex flex-col justify-center items-center">
      {all}
    </div>
  )
}

export default Skill