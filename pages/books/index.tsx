import { useEffect, useState } from "react";
import Header from "../../components/Header"
import FooterForm from "../../components/FooterForm"
import SideBar from "../../components/SideBar"
import PageTitle from "@/components/PageTitle";
import ArticleList from "@/components/ArticleList";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


function Books() {

    return (
        <>
            <Header />
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                    <SideBar/>
                    <div className="mt-10 mr-3 ml-5 w-full rounded-md">
                        <div>
                            <PageTitle title={"オススメの記事一覧"}/>
                        </div>
                        <FooterForm />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Books;