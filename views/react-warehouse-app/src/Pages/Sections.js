<Input
value={this.state.Section}
handleChange={this.handleInputChange}
name="Section"
placeholder="Section (required)"
/>
<Input
value={this.state.Aisles}
handleChange={this.handleInputChange}
name="Aisles"
placeholder="Aisle (required)"
/>
<Input
value={this.state.Items}
handleChange={this.handleInputChange}
name="Items"
placeholder="Item Name (required)"
/>
<TextArea
value={this.state.Notes}
handleChange={this.handleInputChange}
name="Notes"
placeholder="Notes (Optional)"
/>