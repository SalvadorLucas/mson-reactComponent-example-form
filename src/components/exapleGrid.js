const gridDefinition = {
    name: 'app.Grid',
    component: 'Grid',
    items: [
        {
            component: 'GridItem',
            md: 6,
            xs: 12,
            content: {
                component: "Form",
                fields: [
                    {
                        name: "Item1",
                        label: "Item 1",
                        component: "TextField"
                    },
                    {
                        name: "Item2",
                        label: "Item 2",
                        component: "TextField"
                    },
                    {
                        name: "Item3",
                        label: "Item 3",
                        useDisplayValue: false,
                        component: "StateField"
                    }
                ]
            }
        },
        {
            component: 'GridItem',
            md: 6,
            xs: 12,
            content: {
                component: "Form",
                fields: [
                    {
                        name: "Item4",
                        label: "Item 4",
                        component: "TextField"
                    },
                    {
                        name: "Item5",
                        label: "Item 5",
                        component: "TextField"
                    },
                    {
                        name: "Item6",
                        label: "Item 6",
                        useDisplayValue: false,
                        component: "StateField"
                    },
                    {
                        name: "Item7",
                        label: "Item 7",
                        type: "submit",
                        icon: "done",
                        component: "ButtonField",
                    }
                ]
            }
        }
    ]
}

export default gridDefinition