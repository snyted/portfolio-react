import GitHubIcone from '../../../../public/src/img/github-color-svgrepo-com.svg'

export default function GitHubIcon() {
    return (
        <a href="https://github.com/snyted" target="_blank" className='ml-3'>
          <p className='flex items-center'>
            <img src={GitHubIcone} alt="Ícone do Github" className="w-7 h-5"/>/snyted
          </p>
        </a>
    ) 

}