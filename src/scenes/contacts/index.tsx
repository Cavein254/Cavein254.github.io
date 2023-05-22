import Logo from '@/assets/logo.png'

const Contact = () => {
  return (
    <div id='contacts'>
        <div className='flex justify-center items-center flex-col pt-8'>
            <img src={Logo} alt='logo' className='w-[40%]'/>
            <div className='px-16'>
                <p>
                If you liked my work and you need me, I'm ready to talk to you.
                </p>
            </div>
        </div>
        <div>
            <h1 className='text-2xl font-bold text-secondary-200 text-center'>Contacts</h1>
            <div className='text-secondary-200 px-16 flex justify-center items-center flex-col gap-2' >
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