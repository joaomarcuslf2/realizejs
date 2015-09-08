var TableSelectionIndicator = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    dataRows: React.PropTypes.array,
    selectedRowIds: React.PropTypes.array,
    actionButtons: React.PropTypes.array,
    message: React.PropTypes.object,
    removeSelectionButtonName: React.PropTypes.string,
    selectAllButtonName: React.PropTypes.string,
    allSelected: React.PropTypes.bool,
    count: React.PropTypes.number,
    onRemoveSelection: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    rowSelectableFilter: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.selectionIndicator',
      dataRows: [],
      selectedRowIds: [],
      actionButtons: [],
      message: {
        plural: ':count itens selecionados',
        singular: '1 item selecionado'
      },
      removeSelectionButtonName: 'limpar seleção',
      selectAllButtonName: 'selecionar todos',
      allSelected: false,
      rowSelectableFilter: null,
      onRemoveSelection: function(event) {},
      onSelectAll: function(event) {}
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        <span>{this.renderMessage()}</span> {this.renderActions()}
      </div>
    );
  },

  renderMessage: function() {
    var count = this.getSelectionCount();
    if(count === 0) {
      return '';
    } else if(count === 1) {
      return this.props.message.singular;
    } else {
      var message = this.props.message.plural;
      return message.replace(/:count/, count);
    }
  },

  renderActions: function() {
    var count = this.getSelectionCount();
    if(count === 0) {
      return '';
    }

    return (
      <span>
        ({this.renderRemoveSelectionButton()}
        {this.renderSelectAllButton()})
      </span>
    );
  },

  renderRemoveSelectionButton: function() {
    return (
      <a href="#!" onClick={this.props.onRemoveSelection}>
        {this.props.removeSelectionButtonName}
      </a>
    );
  },

  renderSelectAllButton: function() {
    if(typeof this.props.rowSelectableFilter === "function") {
      return '';
    }

    return (
      <span>
        &nbsp;|&nbsp;
        <a href="#!" onClick={this.props.onSelectAll}>
          {this.props.selectAllButtonName}
        </a>
      </span>
    );
  },

  getSelectionCount: function() {
    if(this.props.allSelected && !!this.props.count) {
      return this.props.count;
    } else {
      return this.props.selectedRowIds.length;
    }
  }
});
