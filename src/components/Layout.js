function Header(){
    return(
        <>
            <h1>
                <strong>DCODELAB</strong><br />
                <span>UI/UX DESIGN & DEVELOPMENT</span>
            </h1>

            <a href='#' className='menu'>
                <i className='fas fa-bars'></i>
            </a>
        </>
        
    );
    

    
}


export default Header;

//리턴문안에는 무조건
//하나의 태그로만 감싸져서 내보내져야한다.
//fragment <></> 으로 감싸서 내보내면 된다.