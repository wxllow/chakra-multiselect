import { UsePopperProps, UsePopperReturn } from '@chakra-ui/react';
import { EventKeys } from '@chakra-ui/utils';
import { MutableRefObject } from 'react';
export interface Option {
    label: string;
    value: string | number;
}
export interface SelectState {
    searchValue: string;
    resolvedSearchValue: string;
    isOpen: boolean;
    highlightedIndex: number;
}
declare type AnyFunc = (...args: any[]) => any;
export interface KeyMeta {
    key?: EventKeys;
    keyCode?: EventKeys;
    shift?: boolean;
    meta?: boolean;
}
export declare type KeyboardEventHandler = (e: KeyboardEvent) => void;
export declare type KeyHandler = () => void;
export declare type ScrollToIndex = (index: number, ref: MutableRefObject<HTMLElement | undefined>, optionsRef: MutableRefObject<HTMLElement | undefined>, enabledRef: MutableRefObject<boolean>) => void;
export declare type GetDebounce = (options: Option[]) => number;
export declare enum ChangeActions {
    SingleCreate = "singleCreate",
    SingleRemove = "singleRemove",
    SingleSelect = "singleSelect",
    SingleClear = "singleClear",
    MultiCreate = "multiCreate",
    MultiRemove = "multiRemove",
    MultiSelect = "multiSelect",
    MultiClear = "multiClear"
}
export declare type SelectOnChange = (value: string | number | Array<string | number>, change?: {
    action: ChangeActions;
    value: any;
}) => void;
export declare type GetOption = (option: string | {
    label: string;
    value: any;
}) => {
    label: string;
    value: any;
};
export declare type SelectFilter = (options: Option[], searchValue: string | number, getOption: GetOption) => Option[];
export declare type SelectRemoveValue = (index: number) => void;
export declare type SelectSetOpen = (open: boolean) => void;
export declare type SelectSetSearch = (searchValue: string) => void;
export declare enum SelectActions {
    SetOpen = "setOpen",
    SetSearch = "setSearch",
    HighlightIndex = "highlightIndex"
}
export declare type SelectStateUpdater = (updater: (old: SelectState) => SelectState, action: SelectActions) => void;
export declare type StateReducer = (old: SelectState, newState: SelectState, action: SelectActions) => SelectState;
export declare const labelFromValue: (value: string) => string;
export declare const idFromOption: (option: Option, prefix?: string) => string;
export declare enum SelectionVisibilityMode {
    List = "list",
    Input = "input",
    Both = "both"
}
export interface UseMultiSelectProps {
    value?: string | string[];
    options: Option[];
    onChange?: SelectOnChange;
    getOption?: GetOption;
}
export interface UseMultiSelectReturn {
    value?: string | string[];
    options: Option[];
    onChange?: SelectOnChange;
}
export interface UseSelectProps extends UsePopperProps {
    onChange: SelectOnChange;
    single?: boolean;
    create?: boolean;
    selectionVisibleIn?: SelectionVisibilityMode;
    duplicates?: boolean;
    options?: Option[];
    value?: any;
    placeholder?: string;
    searchPlaceholder?: string;
    size?: 'sm' | 'md' | 'lg';
    shiftAmount?: number;
    getOption?: GetOption;
    getDebounce?: GetDebounce;
    stateReducer?: StateReducer;
    scrollToIndex?: ScrollToIndex;
    filterFn?: SelectFilter;
}
export interface UseSelectReturn {
    value: any;
    multi: boolean;
    searchValue: string;
    isOpen: boolean;
    selectedOption: Option;
    visibleOptions: Option[];
    selectionVisibleIn: SelectionVisibilityMode;
    selectIndex: (index: number) => any;
    highlightIndex: (value: any) => any;
    highlightedValueRef: MutableRefObject<HTMLElement | undefined>;
    highlightedIndexRef: MutableRefObject<number>;
    enableScrollRef: MutableRefObject<boolean>;
    removeValue: SelectRemoveValue;
    setOpen: SelectSetOpen;
    setSearch: SelectSetSearch;
    popper: UsePopperReturn;
    getInputProps: AnyFunc;
    getOptionProps: AnyFunc;
    getOption: GetOption;
    optionsRef: MutableRefObject<any>;
    controlRef: MutableRefObject<any>;
    clearAll: () => void;
    clearable: boolean;
}
declare const SelectProvider: import("react").Provider<UseSelectReturn>, useSelectContext: () => UseSelectReturn;
declare const SelectInputProvider: import("react").Provider<Pick<UseSelectReturn, "getInputProps">>, useSelectInputContext: () => Pick<UseSelectReturn, "getInputProps">;
declare const SelectedProvider: import("react").Provider<Pick<UseSelectReturn, "removeValue">>, useSelectedContext: () => Pick<UseSelectReturn, "removeValue">;
declare const SelectedListProvider: import("react").Provider<Pick<UseSelectReturn, "value" | "selectionVisibleIn" | "multi">>, useSelectedListContext: () => Pick<UseSelectReturn, "value" | "selectionVisibleIn" | "multi">;
declare const SelectActionProvider: import("react").Provider<Pick<UseSelectReturn, "isOpen" | "setOpen" | "clearAll" | "clearable">>, useSelectActionContext: () => Pick<UseSelectReturn, "isOpen" | "setOpen" | "clearAll" | "clearable">;
declare const SelectIdProvider: import("react").Provider<{
    selectLabelId: string;
    selectInputId: string;
}>, useSelectIdContext: () => {
    selectLabelId: string;
    selectInputId: string;
};
export { SelectProvider, SelectInputProvider, SelectedProvider, SelectedListProvider, SelectActionProvider, SelectIdProvider, useSelectContext, useSelectedContext, useSelectedListContext, useSelectInputContext, useSelectActionContext, useSelectIdContext, };
export declare function useSelect({ create, single, selectionVisibleIn, getDebounce, getOption, stateReducer, filterFn, scrollToIndex, shiftAmount, duplicates, options, value, onChange, placement, placeholder, searchPlaceholder, }: UseSelectProps): UseSelectReturn;
export declare function useSelectActionGroup(props?: any): any;
export declare function useSelectInput(props?: any): any;
export declare function useSelectLabel(props?: any): any;
export declare function useSelectButton(props?: any): any;
export declare function useClearButton(props?: any): any;
export declare function useSelectedItem(props?: {
    value: any;
    label: string;
    key?: string;
}): {
    key: any;
    onClick: () => void;
    __css: import("@chakra-ui/styled-system").SystemStyleObject;
    value: any;
    label: string;
};
export declare function useSelectItem({ selected, ...props }?: any): any;
export declare function useSelectList(): {
    ref: (node: any) => void;
    optionsRef: MutableRefObject<any>;
    isOpen: boolean;
    visibleOptions: Option[];
    getOption: GetOption;
    __css: import("@chakra-ui/styled-system").SystemStyleObject;
    'aria-multiselectable': boolean;
    'aria-hidden': boolean;
};
export declare function useSelectedList(props?: any): any;
export declare function useSelectControl(props?: any): any;
export declare const uid: (t?: number) => string;
export declare function useId(): string;
export declare function useMultiSelect(props?: UseMultiSelectProps): UseMultiSelectReturn;
