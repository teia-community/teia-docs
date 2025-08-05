`api.hicdex.com` is currently not supporting the Teia marketplace contract, so if you are running/building a community tool and want to support teia swaps, you will need to switch to an indexer that supports the Teia marketplace and update your code a bit (see below)


Teia has switched to teztok for its indexer. the pubblic API can be found here: Https://teztok.teia.rocks/v1/graphql

An alternative option for that is the old hicdex setup  `api.teia.rocks` (graphql: https://api-v5.teia.rocks/v1/graphql)

## Indexer changes 

The following new properties were added to the swap model of the indexer to ensure the support of the new teia marketplace contract and possibly further marketplace contracts (aka swap contracts) in the future

### FA2
The address of the FA2 contract the swap is referring to. At the moment, this is always set to the hic et nunc FA2 contract `KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton`. 

In the future, we might support other FA2 contracts as well.

### contract_address

The address of the marketplace contract. 

Frontends should check this property when they want to differentiate how to handle a certain swap. The new teia marketplace contract has the address: `KT1PHubm9HtyQEJ4BBpMTVomq6mhbfNZ9z5w`

### Operation ID (OPID)

The unique id of the transaction operation, received from the TzKT indexer, which was responsible for the swap creation. 

The opid property is the new primary key of the swap model and can for example be used to order swaps by their creation. 
Note that the swap.id property remains as before and still contains the id received from the marketplace contract. For example, what was swap.id = 5 before is now still swap.id = 5, but there can be multiple swaps with id = 5 because we support different marketplace contracts that all maintain their own ids independently from each other. Note that because of the change of the primary key, trade.swap_id now refers to swap.opid and not to swap.id anymore.


### Updating from the old api schema (hicdex) to the new:

`hic_et_nunc_dipdup_state`-> `dipdup_index`

index_name is now name 


Whenever the is hic_et_nunc just remove it like so:

`hic_et_nunc_holder`-> `holder`

`hic_et_nunc_trade`-> `trade`

`hic_et_nunc_shareholder`-> `shareholder`

`hic_et_nunc_splitcontract` -> `splitcontract`

`hic_et_nunc_token_by_pk`-> `token_by_pk`

`hic_et_nunc_swap`-> `swap`


Adds a new OPID field with the tx ID