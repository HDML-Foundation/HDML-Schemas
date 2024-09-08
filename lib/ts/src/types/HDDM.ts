/**
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

import { Include } from "./Include";

/**
 * The `HDDM` interface represents the structure of an HDML document.
 * It serves as a hierarchical representation of an HDML document,
 * allowing for traversal of its elements, attributes, and
 * relationships.
 */
export interface HDDM {
  /**
   * includes
   */
  includes: Include[];
  connections: unknown;
  models: unknown;
  frames: unknown;
}
