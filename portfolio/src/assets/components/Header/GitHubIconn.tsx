import GitHubIcone from '../../../../public/src/img/github-color-svgrepo-com.svg'

export default function GitHubIcon() {
    return (
        <a href="https://github.com/snyted" target="_blank" className='relative top-4 left-4'>
          <p className='flex items-center'>
            <img src={GitHubIcone} alt="Ícone do Github" className="w-7 h-5 top-4 left-4"/>/snyted
          </p>
        </a>
    ) 

}