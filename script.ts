



class Scroll {

    navDiv: HTMLElement
    timeoutId: number

    constructor(scrolledElement: string) {
        const navDiv = document.querySelector(scrolledElement) as HTMLElement
        const timeoutId = 0

        if (navDiv === null) throw Error("Scrolled element does not exists.")

        this.navDiv = navDiv
        this.timeoutId = timeoutId

    }



    addClassOnScroll = (): void => {
        this.navDiv.classList.add("scrolling")
        this.timeoutId = setTimeout(this.removeClassAfterTimeout, 1000)
    }

    removeClassAfterTimeout = (): void => {
        this.navDiv.classList.remove("scrolling")
        this.navDiv.classList.add("not-scrolling")
        clearInterval(this.timeoutId)

        //czy na pewno działa clear interval???
    }

    init = (): void => {
        window.addEventListener("scroll", this.addClassOnScroll)
    }
}



// Klasa 


const app = new Scroll("#sticky__menu");
app.init();

// getUrlParameters-easy
// formBEM-easy