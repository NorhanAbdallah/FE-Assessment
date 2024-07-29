import React from 'react';
import Drag from './dragAndDrop/drag';
import { Box, Typography, Chip, Avatar, Button } from '@material-ui/core';
import {
  SignalCellularAlt,
  Star,
} from '@material-ui/icons';
import { Talent } from '../../types';

interface Props {
  talent: Talent;
  index: number;
}

export default function WorkOrderCard({ talent, index }: Props) {

  return (
    <Drag draggableId={talent.id} index={index} key={talent.id}>
      <div
        className="card"
      >
        <Box mb={2} display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'}>
          <Box display={'flex'} alignItems={'center'}>
            <Avatar
              src={talent.imgUrl}
              style={{ marginRight: '8px', borderRadius: '30%' }}
            />
            <Box>
              <Box display={'flex'}>
                <SignalCellularAlt
                  style={{
                    fill:
                      talent.signalPriority === 'HIGH'
                        ? '#82cf6e'
                        : talent.signalPriority === 'MEDIUM'
                          ? '#f6ca45'
                          : '#ec675a',
                  }}
                  fontSize="small"
                />
                <Typography variant={'body2'} style={{ marginLeft: '8px' }}>
                  {talent.name}
                </Typography>
              </Box>
              <Typography
                variant={'body2'}
                style={{ marginLeft: '8px', marginTop: '8px', color: '#9aa7bf' }}
              >
                {talent.name}
              </Typography>
            </Box>
          </Box>
          <Chip label="New" style={{ background: '#e4eafb', color: '#6383ed', fontWeight: 'bold' }} />
        </Box>

        <Box mb={2} display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'}>
          <Box display={'flex'} alignItems={'center'}>
            <Chip
              label={
                <Box display={'flex'} alignItems={'flex-start'}>
                  <Typography variant="caption" style={{ color: 'black', fontWeight: '500' }}>
                    {`${talent.stars}.0`}
                  </Typography>
                  <Star style={{ marginLeft: '4px', fontSize: '16px', color: '#f7cd47' }} />
                </Box>
              }
              variant="default"
              style={{
                color: '#6383ed',
                fontWeight: 'bold',
                minWidth: '28px',
                background: '#f2f4f7',
              }}
            />
            <Box>
              <Typography variant={'body2'} style={{ marginLeft: '8px', color: '#9aa7bf' }}>
                {talent.phoneNumber}
              </Typography>
            </Box>
          </Box>
          {talent.isFollowed && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ borderRadius: '12px', textTransform: 'capitalize', background: '#496eeb' }}
            >
              Followed
            </Button>
          )}
        </Box>
      </div>
    </Drag>
  );
}
