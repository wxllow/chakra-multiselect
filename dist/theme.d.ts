export declare const sizes: {
    sm: {
        control: {
            minH: number;
            spacing: number;
        };
        input: {
            p: string;
        };
        actionGroup: {
            spacing: string;
        };
        list: {
            fontSize: string;
        };
        item: {
            py: number;
            px: number;
        };
        textList: {
            py: number;
            px: number;
        };
        selectedItem: {
            m: string;
        };
        selectedList: {
            py: string;
        };
        groupTitle: {
            mx: number;
            my: number;
            fontSize: string;
        };
    };
    md: {
        control: {
            minH: number;
            spacing: number;
        };
        input: {
            p: string;
        };
        actionGroup: {
            spacing: string;
        };
        list: {
            fontSize: string;
        };
        item: {
            py: number;
            px: number;
        };
        textList: {
            p: number;
        };
        selectedItem: {
            m: string;
        };
        selectedList: {
            py: string;
        };
        groupTitle: {
            mx: number;
            my: number;
            fontSize: string;
        };
    };
    lg: {
        control: {
            minH: number;
            spacing: number;
        };
        input: {
            p: number;
        };
        actionGroup: {
            spacing: string;
        };
        list: {
            fontSize: string;
        };
        item: {
            py: number;
            px: number;
        };
        textList: {
            py: number;
            px: number;
        };
        selectedItem: {
            m: number;
        };
        selectedList: {
            py: number;
        };
        groupTitle: {
            mx: number;
            my: number;
            fontSize: string;
        };
    };
};
declare const _default: {
    defaultProps: {
        size: string;
    };
    parts: string[];
    sizes: {
        sm: {
            control: {
                minH: number;
                spacing: number;
            };
            input: {
                p: string;
            };
            actionGroup: {
                spacing: string;
            };
            list: {
                fontSize: string;
            };
            item: {
                py: number;
                px: number;
            };
            textList: {
                py: number;
                px: number;
            };
            selectedItem: {
                m: string;
            };
            selectedList: {
                py: string;
            };
            groupTitle: {
                mx: number;
                my: number;
                fontSize: string;
            };
        };
        md: {
            control: {
                minH: number;
                spacing: number;
            };
            input: {
                p: string;
            };
            actionGroup: {
                spacing: string;
            };
            list: {
                fontSize: string;
            };
            item: {
                py: number;
                px: number;
            };
            textList: {
                p: number;
            };
            selectedItem: {
                m: string;
            };
            selectedList: {
                py: string;
            };
            groupTitle: {
                mx: number;
                my: number;
                fontSize: string;
            };
        };
        lg: {
            control: {
                minH: number;
                spacing: number;
            };
            input: {
                p: number;
            };
            actionGroup: {
                spacing: string;
            };
            list: {
                fontSize: string;
            };
            item: {
                py: number;
                px: number;
            };
            textList: {
                py: number;
                px: number;
            };
            selectedItem: {
                m: number;
            };
            selectedList: {
                py: number;
            };
            groupTitle: {
                mx: number;
                my: number;
                fontSize: string;
            };
        };
    };
    baseStyle: (props: Record<string, any>) => {
        list: {
            bg: string;
            boxShadow: string;
            color: string;
            w: string;
            py: string;
            zIndex: number;
            borderRadius: string;
            borderWidth: string;
            maxH: string;
            overflowY: string;
            overscrollBehaviorY: string;
        };
        selectedList: {
            display: string;
            flex: number;
            flexWrap: string;
            alignItems: string;
        };
        item: {
            cursor: string;
            transition: string;
            _focus: {
                bg: string;
                boxShadow: string;
            };
            _active: {
                bg: string;
            };
            _expanded: {
                bg: string;
            };
            _selected: {
                bg: string;
            };
            _disabled: {
                opacity: number;
                cursor: string;
            };
        };
        selectedItem: {
            borderRadius: string;
            variant: string;
            colorscheme: any;
        };
        button: {
            variant: string;
            _hover: {
                bg: string;
            };
            _focus: {
                bg: string;
                boxShadow: string;
            };
            _active: {
                bg: string;
            };
            colorscheme: any;
        };
        actionGroup: {
            display: string;
            alignItems: string;
        };
        control: {
            h: string;
            minW: number;
            pr: number;
        };
        input: {
            bgColor: string;
            appearance: string;
            flex: number;
            outline: number;
        };
        groupTitle: {
            fontWeight: string;
        };
        divider: {
            display: string;
            h: string;
            border: number;
            borderColor: string;
            my: number;
            opacity: number;
        };
        label: {
            display: string;
            textAlign: string;
        };
    };
};
export default _default;
