# jsdom-node-iterator

Reproduces a NodeIterator bug in jsdom.

In particular, not all remaining nodes are visited after a text node previously has been removed during iteration.