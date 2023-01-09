export default function useMarvelData(url: string, successCallback: Function, errorCallback: Function) {

    fetch(url).then((res) => {
        if(!res.ok) throw new Error(`Curses! ${res.status} ${res.statusText}`);
        return res.json();
    }).then((data) => {
        const comicData = data?.data?.results;
        successCallback(comicData);
        return comicData;
    }).catch((err) => {
        if(err) errorCallback();
    });
}
