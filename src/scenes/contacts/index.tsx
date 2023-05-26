import Logo from '@/assets/logo.png'

const Contact = () => {
  return (
    <div id='contacts'>
        <div className='flex justify-center items-center flex-col pt-8'>
            <img src={Logo} alt='logo' className='w-[200px] sm:w-[250px]'/>
            <div className='px-16'>
                <p>
                If you liked my work and you need me, I'm ready to talk to you.
                </p>
            </div>
        </div>
        <div>
            <h4 className='text-secondary-200 text-[2rem] font-bold text-center'>Contacts</h4>
            <div className='text-secondary-200 px-16 flex justify-center items-center flex-col gap-2 sm:flex-row sm:justify-around' >
                <div >
                    <p>Github</p>
                    <p>Twitter</p>
                </div>
                <div>
                    <p>Gmail</p>
                    <p>Website</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact