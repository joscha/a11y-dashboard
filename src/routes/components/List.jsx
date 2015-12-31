import React from 'react';

class List extends React.Component {
  render() {
    return (
      <ol>
      {{#each data}}
      <li>
          <h3><a href="{{@key}}" target="_blank">{{@key}}</a></h3>
          <ol class="errors-per-url" type="a">
              {{#each this}}
                  {{#each this}}
                      <li class="selectors-per-message">
                          <h4>{{@key}}
                              <span class="aui-lozenge" title="{{this.code}}">{{this.origin}}</span>
                              {{#each this.standards}}
                                  {{#if this}}
                                  <span class="aui-lozenge aui-lozenge-complete">{{this}}</span>
                                  {{/if}}
                              {{/each}}
                          </h4>
                          {{> table rows=this.rows}}
                      </li>
                  {{/each}}
              {{/each}}
          </ol>
      </li>
      {{/each}}
      </ol>
    );
  }
}

export default List;
