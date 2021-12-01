const title = 'Northside Youth Soccer League';

const header = (
    <div className="HeaderContainer">
        <h1 className="Title">{title}</h1>
    </div>
);

function Header() {
    return (
        <>
            {header}
        </>
    );
}

export default Header;