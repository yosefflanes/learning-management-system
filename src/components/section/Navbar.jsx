import Dibiedu from '../../assets/icons/dibiedu.svg'
import { Button } from '../shared/Button';

const Navbar = () => {
    return (
        <nav className='fixed top-0 w-full px-3 py-6 flex justify-between items-center z-10 backdrop-blur-md h-16 border border-b '>
            <div className='flex w-28 h-6 gap-4 items-center'>
                <img src={Dibiedu} alt="dibiedu-icon" className='w-4 h-4' />
                <h2><a href="#" className='font-bold text-primary text-lg'>DibiEdu</a></h2>
            </div>

            <div className='flex md:w-273 md:h-10 md:items-center gap-8 md:justify-end'>
                <div className='text-primary text-lg hidden md:h-10 md:w-75 md:flex md:gap-6 md:items-center'>
                    <a href="#hero-section">Home</a>
                    <a href="#feature-section">Courses</a>
                    <a href="#about-us-section">About</a>
                    <a href="#contact-us">Contact</a>
                </div>
                <Button title={'Sign Up'} size='sm' className={'hover:bg-blue-800'}/>
            </div>
        </nav>
    );
}

export default Navbar;