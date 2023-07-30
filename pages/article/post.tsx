import Header from "../../components/Header"
import FooterForm from "../../components/FooterForm"
import SideBar from "../../components/SideBar"

function post() {
  return (
    <>
      <Header />
      <main className="md:container md:mx-auto">
            <div className="flex flex-row-reverse">
                <SideBar/>
                <div className="mt-10 ml-5 mr-3 w-full rounded-md">
                  
                </div>
            </div>
        </main>
      <FooterForm />
    </>
    )
}

export default post;