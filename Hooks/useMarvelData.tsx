export default function useMarvelData(url: string, successCallback: Function, errorCallback: Function) {

    fetch(url).then((res) => {
        if(!res.ok) throw new Error(`Curses! ${res.status} ${res.statusText}`);
        const responseJSON = res.json();
        return responseJSON;
    }).then((data) => {
        const comicData = data?.data?.results;
        const totalComics = data?.data?.total;
        successCallback(comicData, totalComics);
        return comicData;
    }).catch((err) => {
        if(err) errorCallback();
    });
}
