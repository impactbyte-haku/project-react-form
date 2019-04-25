import React from 'react'

export class FormBeasts extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Choose your favorite beast</legend>

          <input type="radio" name="beast" />
          <label htmlFor="dragon">Dragon</label>

          <input type="radio" name="beast" />
          <label htmlFor="phoenix">Phoenix</label>

          <input type="radio" name="beast" />
          <label htmlFor="kraken">Kraken</label>
          <br />

          <input type="radio" name="beast" />
          <label htmlFor="yeti">Yeti</label>
          <br />
        </fieldset>
      </form>
    )
  }
}
