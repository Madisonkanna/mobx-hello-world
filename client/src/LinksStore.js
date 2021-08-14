export const createLinksStore = () => {
    return {
        links: [],
        addLink(url) {
            this.links.push({
                url, id: 1
            })
        },
        removeLink(id) {
            this.links = this.links.filter(link => link.id !== id)
        }
    }

}

