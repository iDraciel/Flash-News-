import {articles_url,country_code,category_business,api_key} from '../config/config';


export async function getArticles() {
    try{
        let news = await fetch(`${articles_url}?country=${country_code}&category=${category_business}`,{
        headers: {
            'X-API-KEY':api_key
               }
        });
        let result = await news.json();

        return result.articles;
    }
    catch(error){
        throw error;
    }
}