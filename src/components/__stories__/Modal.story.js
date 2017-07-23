import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Modal from '../Modal';
import Button, { Kind } from '../Button';

storiesOf('Modal', module)
  .add('default', () => {
    return (
      <div>
        <img src="//placebeyonce.com/1000-400"/>
        <Modal
          isOpen={boolean('Open', true)}
        >
          <h1>Remove Videos</h1>
          <p>{"Are you sure you want to remove the selected videos? This cannot be undone, selected videos and all of the corresponding data will be deleted."}</p>
        </Modal>
      </div>
    );
  })
  .add('with Header and Footer', () => {
    return (
      <div>
        <img src="//placebeyonce.com/1000-400"/>
        <Modal
          isOpen={boolean('Open', true)}
          title="Remove Videos"
          dismissible={true}
          onCloseClick={() => console.log}
          footer={(
            <div className="row">
              <div className="col-6">
                <Button
                  onClick={() => console.log}
                  kind={Kind.SECONDARY}
                >
                  {'Cancel'}
                </Button>
              </div>
              <div className="col-6">
                <div style={{textAlign: 'right'}}>
                  <Button
                    onClick={() => console.log}
                    kind={Kind.DETRIMENTAL}
                  >
                    {'Remove'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        >
          <p>{"Are you sure you want to remove the selected videos? This cannot be undone, selected videos and all of the corresponding data will be deleted."}</p>
        </Modal>
      </div>
    );
  });
