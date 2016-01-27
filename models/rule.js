export.Rule = function (data) {
    data = data || {};

    this.name = data.name || '';
    this.description = data.description || '';
    this.enabled = data.enabled || false;
    this.inputStreams = data.inputStreams.split(';') || [];
    this.outputStreams = data.outputStreams.split(';') || [];
    this.whenClause = data.whenClause || '';
    this.thenClause = data.thenClause || '';
    this.createdDate = data.createdDate;
    this.createdBy = data.createdBy || '';
    this.modifiedDate = date.modifiedDate;
    this.modifiedBy = data.modifiedBy || '';
    this.isArchived = data.isArchived;
};