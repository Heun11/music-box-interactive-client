const utils = {
    methods: {
        NONE_SELECTED: 'NONE_SELECTED',
        USE_TEMPLATE: 'USE_TEMPLATE',
        START_FROM_SCRATCH: 'START_FROM_SCRATCH',
        UPLOAD_CONFIG: 'UPLOAD_CONFIG'
    },
    action_types: {
        ADD_GAS_SPECIES: 'ADD_GAS_SPECIES',
        REMOVE_GAS_SPECIES: 'REMOVE_GAS_SPECIES',
        ADD_PROPERTY: 'ADD_PROPERTY',
        REMOVE_PROPERTY: 'REMOVE_PROPERTY',
        ADD_REACTION: "ADD_REACTION",
        UPDATE_REACTION_DATA: 'UPDATE_REACTION_DATA',
        REMOVE_REACTION: 'REMOVE_REACTION',
        ADD_REACTANT: 'ADD_REACTANT',
        REMOVE_REACTANT: 'REMOVE_REACTANT',
        ADD_PRODUCT: 'ADD_PRODUCT',
        REMOVE_PRODUCT: 'REMOVE_PRODUCT',
        UPDATE_BASIC_CONFIGURATION: 'UPDATE_BASIC_CONFIGURATION',
        LOAD_CONFIG: 'LOAD_CONFIG',
        EXAMPLE_FETCHED: 'EXAMPLE_FETCHED',
        START_POLLING: 'START_POLLING',
        RUN_COMPLETE: 'RUN_COMPLETE',
    },
    examples: {
        CHAPMAN: 'CHAPMAN',
        FLOW_TUBE: 'FLOW_TUBE',
        FULL_GAS_PHASE: 'FULL_GAS_PHASE'
    }
}

export default utils
