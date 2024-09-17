import burgerImg from './assets/burger.avif';

function MainContent() {
    return (
        <>
            <div className="maincontent">
                <img src={burgerImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id aliquam vel corporis eos praesentium sequi a facilis hic quidem.</p>
            </div>
        </>
    );
}

export default MainContent;