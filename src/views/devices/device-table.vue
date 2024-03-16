<template>
  <PageWrapper title="可展开表格" content="???">
    <BasicTable @register="registerTable">
      <template #expandedRowRender="{ record }">
        <span>No: {{ record.id }} </span>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            stopButtonPropagation
            :actions="[
              {
                label: '操作',
                icon: 'ic:sharp-settings-applications',
                onClick: handleDelete.bind(null, record),
              },
            ]"
            :dropDownActions="[
              {
                label: '启用',
                popConfirm: {
                  title: '是否启用？',
                  confirm: handleOpen.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { PageWrapper } from '@/components/Page';

  import { columns, getResult } from './data';

  const [registerTable] = useTable({
    api: getResult,
    title: 'Devices',
    columns,
    rowKey: 'id',
    canResize: false,
    expandRowByClick: true,
    accordion: true,
    pagination: {
      pageSize: 10,
    },
    actionColumn: {
      width: 160,
      title: 'Action',
      dataIndex: 'action',
      fixed: 'right',
    },
  });

  function handleDelete(record: Recordable) {
    console.log('点击了删除', record);
  }

  function handleOpen(record: Recordable) {
    console.log('点击了启用', record);
  }
</script>
