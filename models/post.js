const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URLSlugs = require('mongoose-url-slugs');
const tr = require('transliter');

const schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

schema.plugin(
  URLSlugs('title', {
    fields: 'url',
    generator: text => tr.slugify(text)
  })
);

schema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Post', schema);
