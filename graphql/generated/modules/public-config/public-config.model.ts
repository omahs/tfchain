import { BaseModel, Model, OneToMany, StringField, JSONField } from '@subsquid/warthog';

import { Node } from '../node/node.model';

import * as jsonTypes from '../jsonfields/jsonfields.model';

@Model({ api: {} })
export class PublicConfig extends BaseModel {
  @StringField({})
  ipv4!: string;

  @StringField({})
  ipv6!: string;

  @StringField({})
  gw4!: string;

  @StringField({})
  gw6!: string;

  @StringField({})
  domain!: string;

  @OneToMany(() => Node, (param: Node) => param.publicConfig, {
    nullable: true,
    modelName: 'PublicConfig',
    relModelName: 'Node',
    propertyName: 'nodepublicConfig',
  })
  nodepublicConfig?: Node[];

  constructor(init?: Partial<PublicConfig>) {
    super();
    Object.assign(this, init);
  }
}
