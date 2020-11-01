const urlFormatter = (locnData, filter, filterVal) => {
    if (!locnData && filterVal)
        return `?${filter}=${filterVal}`
    if (!locnData && !filterVal)
        return ``
    if (locnData.indexOf(filter) > -1) {
        if ((["launchSuccess", "landSuccess"].includes(filter))) {
            if (filterVal) {
                return locnData
            } else {
                let t = locnData.split('?')[1].split('&').filter(el => el.indexOf(filter) == -1)
                if (t.length > 0)
                    return `?${t.join("&")}`
            }
        }
        else {
            if (locnData.indexOf(filterVal) > -1) {
                let t = locnData.split('?')[1].split('&').filter(el => el.indexOf(filter) == -1)
                if (t.length > 0)
                    return `?${t.join("&")}`
            }
            else {
                return `${locnData.replace(locnData.split('year=')[1].substr(0, 4), filterVal)}`
            }
        }
    } else {
        if ((["launchSuccess", "landSuccess"].includes(filter))) {
            if (filterVal) {
                return `${locnData}&${filter}=${filterVal}`
            }
            return `${locnData}`
        }
        else {
            return `${locnData}&${filter}=${filterVal}`
        }
    }
    return ``
}
export default urlFormatter;