import linkedin from '../assets/in.webp'
import github from '../assets/github.webp'
import stack from '../assets/stack.webp'


function Footer() {

    return (
        <footer className='bg-primary-subtle'>
            <div id='ffooter'>
                <a href='https://github.com/Luisrszm'><img className="resized-image" src={github} alt='github icon'/></a>
                <a href='https://www.linkedin.com/in/luis-rszm/'><img className="resized-image" src={linkedin} alt='linkedin icon'/></a>
                <a href='https://stackoverflow.com/users/27861042/luis-res%c3%a9ndez'><img className="resized-image" src={stack} alt='stack overflow icon'/></a>
            </div>
        </footer>
    );
}

export default Footer