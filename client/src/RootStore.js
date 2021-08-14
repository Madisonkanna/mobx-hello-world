
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

export const createUsersStore = () => {
    return {
        users: [],
        addUser(username) {
            this.users.push({
                username, id: 1
            })
        }
    }

}

export const createRootStore = () => {
    return {
        linksStore: createLinksStore(),
        usersStore: createUsersStore()
    }
}